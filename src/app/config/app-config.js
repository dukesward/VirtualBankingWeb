exports.appconfig = {
  api: {
    app_module: {
      authentication: {
        proxy: "http://18.216.128.62:8081",
        uri: "/private/v1/customer/login",
        http_method: "POST"
      },
      login: {
        proxy: "http://ec2-18-217-195-82.us-east-2.compute.amazonaws.com",
        uri: "/private/v1/customer/login",
        http_method: "POST"
      },
      mutualFundSearch: {
        proxy: "http://18.216.37.212:8880",
        uri: "/private/v1/investments/mutualFunds/search"
      }
    }
  }
};
