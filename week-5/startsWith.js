table = new SimpleTable("baby-2010.csv");
for (row: table) {
    if (row.getField("name").startsWith("Ab") ||
    row.getField("name").startsWith("Ac")) {
  print(row);
}
if (row.getField("name").startsWith("Ab") ||
      row.getField("name").startsWith("Ac") ||
      row.getField("name").startsWith("Al")) {
    print(row);
  }
}