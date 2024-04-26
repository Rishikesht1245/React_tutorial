import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/*
- createApi is used to define the end points 
- fetchBaseQuery is used as a wrapper for our endpoints.
*/

//  will act as a slice
//automatically generates a reducer and middleware
export const userAPI = createApi({
  //unique key to bind oru slice with the store
  reducerPath: "userApi",
  //   Provide the base url here
  baseQuery: fetchBaseQuery({
    baseUrl: "https://662be6bede35f91de159dbf0.mockapi.io/api/v1",
  }),
  // function to mention our endpoints
  endpoints: (builder) => ({
    // here we mention all our endpoints and their functions as key value pairs
    // we will access properties inside builder
    getUsers: builder.query({
      // end point will be attached to the base url
      query: () => "/users",
    }),
  }),
});

// automatically change the endpoints to a hook
// we need to add use as prefix and query or mutation as suffix whatever we used as builder.query
export const { useGetUsersQuery } = userAPI;
