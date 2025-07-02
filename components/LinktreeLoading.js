import { Link2, Globe, Plus, Eye, Share2 } from "lucide-react";

export default function LinktreeLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header Loading */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
            <Link2 className="w-8 h-8 text-white" />
          </div>
          <div className="h-9 bg-gray-200 rounded-lg w-64 mx-auto mb-2 animate-pulse"></div>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
            <Globe className="w-4 h-4 text-gray-400 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-40 animate-pulse"></div>
          </div>
        </div>

        {/* Profile Section Loading */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6 border border-gray-100">
          <div className="text-center mb-6">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            </div>

            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded-lg w-48 mx-auto animate-pulse"></div>
            </div>
          </div>

          {/* Profile Stats Loading */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            <div className="text-center">
              <div className="h-8 bg-gray-200 rounded w-12 mx-auto mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-8 mx-auto animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-200 rounded w-12 mx-auto mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-8 mx-auto animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-200 rounded w-12 mx-auto mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-8 mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Add New Link Section Loading */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Plus className="w-5 h-5 text-green-600" />
            </div>
            <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
          
          {/* Form Loading */}
          <div className="space-y-4">
            <div className="h-12 bg-gray-100 rounded-lg w-full animate-pulse"></div>
            <div className="h-12 bg-gray-100 rounded-lg w-full animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-24 animate-pulse"></div>
          </div>
        </div>

        {/* Your Links Section Loading */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <div className="h-6 bg-gray-200 rounded w-28 animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
          </div>
          
          {/* Link Items Loading */}
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Section Loading */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="text-center">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Share2 className="w-5 h-5 text-purple-600" />
              </div>
              <div className="h-6 bg-gray-200 rounded w-36 animate-pulse"></div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-dashed border-gray-200">
              <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-3 animate-pulse"></div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-10 bg-gray-200 rounded-lg w-64 animate-pulse"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="h-12 bg-gray-200 rounded-xl w-32 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded-xl w-36 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Quick Actions Loading */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Eye className="w-4 h-4 text-orange-600" />
            </div>
            <div className="h-4 bg-gray-200 rounded w-16 mx-auto mb-1 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-20 mx-auto animate-pulse"></div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Globe className="w-4 h-4 text-green-600" />
            </div>
            <div className="h-4 bg-gray-200 rounded w-16 mx-auto mb-1 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-24 mx-auto animate-pulse"></div>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="fixed top-4 right-4 bg-white rounded-full p-3 shadow-lg border border-gray-100">
          <div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}