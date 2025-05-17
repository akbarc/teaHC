"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { 
  getContactSubmissions, 
  updateSubmissionStatus, 
  deleteSubmission,
  type ContactSubmissionWithId,
  type ContactSubmissionStatus 
} from "@/lib/admin/contact-admin-service"
import { format } from "date-fns"

const ITEMS_PER_PAGE = 10
const STATUS_OPTIONS: { value: ContactSubmissionStatus; label: string }[] = [
  { value: "new", label: "New" },
  { value: "in_progress", label: "In Progress" },
  { value: "resolved", label: "Resolved" },
  { value: "archived", label: "Archived" },
]

export default function ContactAdminPage() {
  const [submissions, setSubmissions] = useState<ContactSubmissionWithId[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedStatus, setSelectedStatus] = useState<ContactSubmissionStatus | "">("")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmissionWithId | null>(null)
  const [notes, setNotes] = useState("")

  const fetchSubmissions = async () => {
    setIsLoading(true)
    try {
      const result = await getContactSubmissions(
        currentPage,
        ITEMS_PER_PAGE,
        selectedStatus || undefined
      )
      
      if (result.success && result.submissions && typeof result.totalCount === 'number') {
        setSubmissions(result.submissions)
        setTotalCount(result.totalCount)
      } else {
        toast.error(result.error || 'Failed to fetch submissions')
      }
    } catch (error) {
      toast.error("Failed to fetch submissions")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSubmissions()
  }, [currentPage, selectedStatus])

  const handleStatusChange = async (id: string, status: ContactSubmissionStatus) => {
    try {
      const result = await updateSubmissionStatus(id, status, notes)
      if (result.success) {
        toast.success("Status updated successfully")
        fetchSubmissions()
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null)
          setNotes("")
        }
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error("Failed to update status")
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return

    try {
      const result = await deleteSubmission(id)
      if (result.success) {
        toast.success("Submission deleted successfully")
        fetchSubmissions()
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null)
          setNotes("")
        }
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error("Failed to delete submission")
    }
  }

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">Contact Submissions</h1>
          
          <div className="w-full md:w-auto flex gap-4">
            <Select
              value={selectedStatus}
              onValueChange={(value) => {
                setSelectedStatus(value as ContactSubmissionStatus)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                {STATUS_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {isLoading ? (
            <div className="text-center py-8">Loading...</div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No submissions found</div>
          ) : (
            submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-white rounded-lg shadow-sm p-4 space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{submission.name}</h3>
                    <p className="text-sm text-gray-500">{submission.email}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    submission.status === 'new' ? 'bg-blue-100 text-blue-800' :
                    submission.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                    submission.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {STATUS_OPTIONS.find(s => s.value === submission.status)?.label}
                  </span>
                </div>
                
                <div>
                  <p className="font-medium text-sm">Subject:</p>
                  <p className="text-sm text-gray-600">{submission.subject}</p>
                </div>
                
                <div>
                  <p className="font-medium text-sm">Message:</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{submission.message}</p>
                </div>
                
                <div className="text-xs text-gray-500">
                  {format(new Date(submission.created_at), 'MMM d, yyyy h:mm a')}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => setSelectedSubmission(submission)}
                  >
                    View Details
                  </Button>
                  <Select
                    value=""
                    onValueChange={(value) => handleStatusChange(submission.id, value as ContactSubmissionStatus)}
                  >
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Update Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {isLoading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center">Loading...</td>
                  </tr>
                ) : submissions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">No submissions found</td>
                  </tr>
                ) : (
                  submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{submission.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{submission.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{submission.subject}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          submission.status === 'new' ? 'bg-blue-100 text-blue-800' :
                          submission.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                          submission.status === 'resolved' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {STATUS_OPTIONS.find(s => s.value === submission.status)?.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(new Date(submission.created_at), 'MMM d, yyyy h:mm a')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedSubmission(submission)}
                        >
                          View
                        </Button>
                        <Select
                          value=""
                          onValueChange={(value) => handleStatusChange(submission.id, value as ContactSubmissionStatus)}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Update Status" />
                          </SelectTrigger>
                          <SelectContent>
                            {STATUS_OPTIONS.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="px-4 py-2 text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}

        {/* Submission Details Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">Submission Details</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedSubmission(null)
                      setNotes("")
                    }}
                  >
                    ✕
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-500">Name</h3>
                    <p>{selectedSubmission.name}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500">Email</h3>
                    <p>{selectedSubmission.email}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500">Subject</h3>
                    <p>{selectedSubmission.subject}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500">Message</h3>
                    <p className="whitespace-pre-wrap">{selectedSubmission.message}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500">Date Submitted</h3>
                    <p>{format(new Date(selectedSubmission.created_at), 'PPpp')}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500 mb-2">Status</h3>
                    <Select
                      value={selectedSubmission.status}
                      onValueChange={(value) => handleStatusChange(selectedSubmission.id, value as ContactSubmissionStatus)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {STATUS_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500 mb-2">Notes</h3>
                    <Textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Add notes about this submission..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-4">
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(selectedSubmission.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedSubmission(null)
                        setNotes("")
                      }}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 