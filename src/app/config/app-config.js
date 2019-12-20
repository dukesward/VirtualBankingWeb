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
      profile: {
        proxy: "http://ec2-18-217-195-82.us-east-2.compute.amazonaws.com",
        uri: "/private/v1/customer/profiles",
        http_method: "GET"
      },
      mutualFundHoldings: {
        proxy: "http://13.251.177.87:8660",
        uri: "/private/v1/investments/mutualFunds/{customerNo}/holdings"
      },
      accounts: {
        proxy: "http://ec2-18-217-195-82.us-east-2.compute.amazonaws.com",
        uri: "/private/v1/accounts/all",
        http_method: "GET"
      },
      mutualFundSearch: {
        proxy: "http://13.251.177.87:8660",
        uri: "/private/v1/investments/mutualFunds/search"
      },
      mutualFundBuy: {
        proxy: "http://13.251.177.87:8660",
        uri: "/private/v1/investments/mutualFunds/buy"
      }
    }
  }
};
