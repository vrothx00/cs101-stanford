table = new SimpleTable("survey-2012.csv");
table.convertToLowerCase();
count1 = 0;
count2 = 0;
for (row: table) {

  if (row.getField("sport") == "soccer" &&
      row.getField("gender") == "male") {
    count1 = count1 + 1;
  }

  if (row.getField("sport") == "soccer"  &&
      row.getField("gender") == "female") {
    count2 = count2 + 1;
  }
}
print("soccer male:", count1);
print("soccer female:", count2);