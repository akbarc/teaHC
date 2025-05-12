-- SQL script to create the subscribers table in Supabase

-- Create subscribers table
CREATE TABLE IF NOT EXISTS public.subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT,
  name TEXT,
  ip_address TEXT,
  user_agent TEXT,
  metadata JSONB DEFAULT '{}'::JSONB,
  is_verified BOOLEAN DEFAULT FALSE,
  reservation_completed BOOLEAN DEFAULT FALSE
);

-- Add RLS (Row Level Security) policies
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting - allow client-side inserts
CREATE POLICY insert_subscribers ON public.subscribers 
  FOR INSERT 
  TO authenticated, anon
  WITH CHECK (true);

-- Create policy for viewing - only allow authenticated users (admins) to see all entries
CREATE POLICY select_subscribers ON public.subscribers 
  FOR SELECT 
  TO authenticated
  USING (true);

-- Create policy for updating - only allow authenticated users (admins) to update
CREATE POLICY update_subscribers ON public.subscribers 
  FOR UPDATE 
  TO authenticated
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS subscribers_email_idx ON public.subscribers (email);

-- Create index on source for analytics
CREATE INDEX IF NOT EXISTS subscribers_source_idx ON public.subscribers (source);

-- Comment on table and columns
COMMENT ON TABLE public.subscribers IS 'User email subscriber list for TeaHC';
COMMENT ON COLUMN public.subscribers.email IS 'Primary email address of subscriber';
COMMENT ON COLUMN public.subscribers.source IS 'Where the subscriber came from (e.g. homepage, reservation)';
COMMENT ON COLUMN public.subscribers.reservation_completed IS 'Whether the subscriber completed a product reservation';

-- Notify on new subscriber
CREATE OR REPLACE FUNCTION notify_new_subscriber()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify('new_subscriber', NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS subscribers_notify_trigger ON public.subscribers;
CREATE TRIGGER subscribers_notify_trigger
  AFTER INSERT ON public.subscribers
  FOR EACH ROW
  EXECUTE PROCEDURE notify_new_subscriber(); 