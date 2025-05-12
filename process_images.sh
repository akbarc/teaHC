#!/bin/bash

# Script to process downloaded images for TeaHC website
echo "Processing downloaded images for TeaHC website..."

# Create the product-images directory if it doesn't exist
mkdir -p public/product-images

# Copy the first absorption comparison image to teahc-rapid-absorption.png
cp ~/Downloads/teahc-rapid-absorption.png public/product-images/teahc-rapid-absorption.png
echo "Processed teahc-rapid-absorption.png"

# Copy mother/child image to mom-child-teahc-move.png
cp ~/Downloads/mom-child-teahc-move.png public/product-images/mom-child-teahc-move.png
echo "Processed mom-child-teahc-move.png"

# Copy grandfather/grandson image to family-active-lifestyle.png
cp ~/Downloads/family-active-lifestyle.png public/product-images/family-active-lifestyle.png
echo "Processed family-active-lifestyle.png"

echo "All images processed successfully!" 