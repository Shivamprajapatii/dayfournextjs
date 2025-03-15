import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name: 'email',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "shivam@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const username = credentials?.username;
              const password = credentials?.password;

              console.log(username, password);

              const user = {
                name : "shivam",
                id :"1",
                password : "Shivam"
              }

              if(user){
                return user;
              } 
                return null
              

            }
          }),

          GoogleProvider({
            clientId: "process.env.GOOGLE_CLIENT_ID",
            clientSecret: "process.env.GOOGLE_CLIENT_SECRET"
          }),
          GitHubProvider({
            clientId: "process.env.GITHUB_ID",
            clientSecret: "process.env.GITHUB_SECRET"
          })
    ]

});

export { handler as GET, handler as POST }