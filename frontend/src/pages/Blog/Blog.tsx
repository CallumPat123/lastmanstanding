import React from "react";
import AppBar from "../../components/AppBar";
import FullPageContentContainer from "../../components/FullPageContentContainer";
// import { Snackbar } from "@mui/material";
import { Box, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

// Placeholder data for blog posts. You might replace this with actual data from an API or a static file.
const blogPosts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content for the first post.",
    author: "Author Name",
    date: "March 1, 2024",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content for the second post.",
    author: "Author Name",
    date: "March 2, 2024",
  },
  // Add more blog posts as needed
];

export const Blog = () => {
  return (
    <>
      <AppBar title="Blog" />
      <Toolbar />
      <FullPageContentContainer maxWidth="lg">
        <Box>
          {blogPosts.map((post) => (
            <Box key={post.id} style={{ marginBottom: "20px" }}>
              <Typography variant="h4" color={"text.primary"}>
                {post.title}
              </Typography>
              <Typography variant="p" color={"text.primary"}>
                {post.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </FullPageContentContainer>
    </>
  );
};
