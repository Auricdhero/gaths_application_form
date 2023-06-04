-- CreateTable
CREATE TABLE "members" (
    "title" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "oname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "countrybirth" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "hometown" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "addressline1" TEXT NOT NULL,
    "addressline2" TEXT NOT NULL,
    "ghcard" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "regioninstitution" TEXT NOT NULL,
    "prog" TEXT NOT NULL,
    "clevel" TEXT NOT NULL,
    "startdate" TIMESTAMP(3) NOT NULL,
    "enddate" TIMESTAMP(3) NOT NULL,
    "studentid" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "localchapter" TEXT NOT NULL,
    "positionlocalchapter" TEXT NOT NULL,
    "yearjoinedlocal" TIMESTAMP(3) NOT NULL,
    "localchaptermembership" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "members_phone_key" ON "members"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "members_email_key" ON "members"("email");
