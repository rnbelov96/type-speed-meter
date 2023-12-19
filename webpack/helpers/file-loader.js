module.exports = ({ folderName = '', contentHash = false }) => {
  return {
    loader: 'file-loader',
    options: {
      name: contentHash
        ? `${folderName}/[name].[ext]`
        : `${folderName}/[name].[ext]`,
    },
  };
};
