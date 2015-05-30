app.factory('postService', function($http, authService, baseServiceUrl) {
    return {
        getNewsFeeds: function(success, error) {
            var headers = authService.getAuthHeaders();
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'me/feed?StartPostId=&PageSize=5',
                headers: headers
            }
            $http(request).success(success).error(error);
        }
    }
});