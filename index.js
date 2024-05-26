const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/schools", async (req, res) => {
  const schools = await prisma.school.findMany();
  res.json(schools);
});

app.post("/school", async (req, res) => {
  const {
    schoolType,
    schoolName,
    address,
    postalCode,
    province,
    regency,
    schoolPhone,
    schoolEmail,
    facebook,
    totalStudents,
  } = req.body;
  if (
    !schoolName ||
    !address ||
    !postalCode ||
    !schoolPhone ||
    !schoolEmail ||
    !totalStudents
  ) {
    res.status(400);
  }
  const newSchool = await prisma.school.create({
    data: {
      schoolType: schoolType,
      schoolName: schoolName,
      address: address,
      postalCode: postalCode,
      province: province,
      regency: regency,
      schoolPhone: schoolPhone,
      schoolEmail: schoolEmail,
      facebook: facebook,
      totalStudents: totalStudents,
    },
  });
  res.json(newSchool);
});
app.delete("/school", async (req, res) => {
  const { id } = req.body;
  const school = await prisma.school.delete({
    where: {
      id: id,
    },
  });
  res.json(school);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
