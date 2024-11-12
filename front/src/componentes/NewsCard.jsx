import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

const NewsCard = ({ article }) => {
  return (
    <Card>
      <CardContent>
        <Link href={article.link} target="_blank" rel="noopener noreferrer" underline="none">
          <Typography variant="h6">{article.title}</Typography>
        </Link>
        <Typography variant="body2">{article.snippet}</Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
