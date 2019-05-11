#1 Explain the differences between `client-side routing` and `server-side routing`.

The main difference between client & server side routing is within the name. When a user action in the browser requests the webpage to navigate to a page with a different route than the currently displayed one, there are two options: a) A client-side routing would request for the data for the page that is being routed to locally, b) exact opposite of client-side, the request for data is sent to a server, which in turn sends back all the information for the newly rendered webpage. Client-routing is synomous with Single-Page applications, because even though it may have a multi page layout, this is rendering more as an App than a traditional website. 

#2 Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create - .post
Read -  .get
Update - .put
Delete - .delete

#3 Mention three tools we can use to make AJAX requests.

1- Axios
2- ComponentDidMount
3- High Order Functions