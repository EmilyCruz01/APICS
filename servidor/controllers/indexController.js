exports.getIndex = (req, res) => {
    res.sendFile(__dirname + '/../index.html');
  };
  