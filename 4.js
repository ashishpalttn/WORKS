const getColumns = () => {
  const configColumns = _.cloneDeep(columns);

  // Ensure that all columns are sortable and have appropriate sortComparator
  const updatedColumns = configColumns.map((col) => {
    if (col.sortable === undefined) {
      col.sortable = true;
    }
    
    // Custom sorting logic for specific columns if needed
    if (col.field === 'someNumericField') {
      col.sortComparator = (v1, v2) => v1 - v2;
    } else if (col.field === 'someDateField') {
      col.sortComparator = (v1, v2) => new Date(v1) - new Date(v2);
    }

    return col;
  });

  // Filter out columns to hide based on hideColumnFromTable property
  const filteredConfigColumn = updatedColumns.filter((col) => !col.hideColumnFromTable);

  if (showDeleteRow || showEditRow || uploadOptions?.showSingleIconUpload) {
    // Determine width for actions column based on the number of icons
    const icons =
      (uploadOptions?.showSingleIconUpload ? 1 : 0) +
      (showDeleteRow ? 1 : 0) +
      (showEditRow ? 1 : 0);
    const width = icons < 3 ? 75 : 115;
    filteredConfigColumn.push({
      field: 'action',
      type: 'actions',
      width,
      getActions,
      align: 'right',
    });
  }

  return filteredConfigColumn.map((config) => {
    delete config.editable;
    return config;
  });
};
