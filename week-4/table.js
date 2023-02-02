table = new SimpleTable("baby-2010.csv");
for (row: table) {
  if (row.getField("name") == "Alice") {
    print(row);
  }
   if (row.getField("rank") == 1) {
    print(row);
  }
  if (row.getField("rank") < 10) {
    print(row);
  }
    if (row.getField("rank") <= 10) {
    print(row);
  }
    if (row.getField("rank") > 990) {
    print(row);
  }
  if (row.getField("gender") == "girl") {
    print(row);
  }
}