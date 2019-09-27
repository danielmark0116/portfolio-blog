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
      title: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur architecto dolore placeat voluptates ab aliquid sunt dolorem repellat nam quidem voluptate quis necessitatibus omnis, inventore numquam, voluptatibus illum cupiditate harum.'
    },
    {
      id: '9374hgkjd',
      title: 'Lorem Ipsum 2.0',
      content:
        'Second lorepsum polepsum wasup man. Consequatur architecto dolore placeat voluptates ab aliquid sunt dolorem repellat nam quidem voluptate quis necessitatibus omnis, inventore numquam, voluptatibus illum cupiditate harum.'
    }
  ];
  res.json(data);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
