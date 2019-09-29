const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/posts', (req, res) => {
  const data = [
    {
      id: '3498jfsud',
      title: 'Is it really?',
      content:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
    },
    {
      id: '9374hgkjd',
      title: 'This is not what I was thinking of...',
      content:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.'
    }
  ];
  res.json(data);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
