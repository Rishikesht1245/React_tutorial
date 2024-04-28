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
  // adding tag types : automatic fetching of data when there is change
  tagTypes: ["User"],

  // function to mention our endpoints
  endpoints: (builder) => ({
    // here we mention all our endpoints and their functions as key value pairs
    // we will access properties inside builder
    getUsers: builder.query({
      // end point will be attached to the base url
      query: () => "/users",
      providesTags: ["User"],
    }),

    // get single user for editing
    getUser: builder.query({
      // end point will be attached to the base url
      query: (id) => `/users/${id}`,
      providesTags: ["User"],
    }),

    //add users
    // mutation, since we are going to mutate our data
    addUser: builder.mutation({
      // end point will be attached to the base url
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),

    // edit user
    updateUser: builder.mutation({
      // end point will be attached to the base url
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),

    // delete User
    deleteUser: builder.mutation({
      // end point will be attached to the base url
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

// automatically change the endpoints to a hook
// we need to add use as prefix and query or mutation as suffix whatever we used as builder.query
export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userAPI;
