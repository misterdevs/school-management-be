-- CreateTable
CREATE TABLE `School` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `schoolType` VARCHAR(191) NOT NULL,
    `schoolName` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `postalCode` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `regency` VARCHAR(191) NOT NULL,
    `schoolPhone` VARCHAR(191) NOT NULL,
    `schoolEmail` VARCHAR(191) NOT NULL,
    `facebook` VARCHAR(191) NULL,
    `totalStudents` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
