"use client"

import React from "react"
import { CommentSection} from "react-comments-section"
import "react-comments-section/dist/index.css"

const CommentComponent = () => {

  const data =[
    {
      userId: "02b",
      comId: "017",
      fullName: "Lily",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "I think you have a point🤔",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      timestamp: "2024-09-28T12:34:56Z",
      replies: [],
    }
  ]

  return (
    <CommentSection
      currentUser={{
        currentUserId: "01a",
        currentUserImg:
          "https://ui-avatars.com/api/name=Riya&background=random",
        currentUserProfile:
          "https://www.linkedin.com/in/riya-negi-8879631a9/",
        currentUserFullName: "Riya Negi"
      }}
      logIn={{
        onLogin: () => alert("Call login function "),
        signUpLink: "http://localhost:3001/"
      }}
      advancedInput={true}
      commentData={data}
      placeHolder="Write your comment..."
      onSubmitAction={(data: {
        userId: string
        comId: string
        avatarUrl: string
        userProfile?: string
        fullName: string
        text: string
        replies: any
        commentId: string
      }) => console.log("check submit, ", data)}
      currentData={(data: any) => {
        console.log("current data", data)
      }}
    />
  )
}

export default CommentComponent;