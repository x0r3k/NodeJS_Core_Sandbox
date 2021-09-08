insert into DC_GOAL (GOAL_ID, GOAL_GROUP_ID, GOAL_TITLE, GOAL_CD, GOAL_BODY, ITEM_ORDER) values (1, 4, '1. Count to 100 by ones and by tens.', 'G1', '~Name~ will count 100 by 1 and 10 correctrly ____% of the time', 10);
insert into DC_GOAL (GOAL_ID, GOAL_GROUP_ID, GOAL_TITLE, GOAL_CD, GOAL_BODY, ITEM_ORDER) values (2, 4, '2. Count forward beginning from a given number within the known sequence (instead of having to begin at 1).', 'G2', '~Name~ will count forward beginning from a given number within the known sequence (instead of having to begin at 1).', 20);
insert into DC_GOAL (GOAL_ID, GOAL_GROUP_ID, GOAL_TITLE, GOAL_CD, GOAL_BODY, ITEM_ORDER) values (3, 4, '3. Write numbers from 0 to 20. Represent a number of objects with a written numeral 0-20 (with 0 representing a count of no objects).', 'G3', '~Name~ will write numbers from 0 to 20. Represent a number of objects with a written numeral 0-20 (with 0 representing a count of no objects).', 30);
insert into DC_GOAL (GOAL_ID, GOAL_GROUP_ID, GOAL_TITLE, GOAL_CD, GOAL_BODY, ITEM_ORDER) values (4, 5, '4. Understand the relationship between numbers and quantities; connect counting to cardinality', 'G4', '~Name~ will understand the relationship between numbers and quantities; connect counting to cardinality', 10);
insert into DC_GOAL (GOAL_ID, GOAL_GROUP_ID, GOAL_TITLE, GOAL_CD, GOAL_BODY, ITEM_ORDER) values (5, 5, '5. Count to answer “how many?” questions about as many as 20 things arranged in a line, a rectangular array, or a circle, or as many as 10 things in a scattered configuration; given a number from 1–20, count out that many objects.', 'G5', '~Name~ will count to answer “how many?” questions about as many as 20 things arranged in a line, a rectangular array, or a circle, or as many as 10 things in a scattered configuration; given a number from 1–20, count out that many objects.', 20);
insert into DC_GOAL (GOAL_ID, GOAL_GROUP_ID, GOAL_TITLE, GOAL_CD, GOAL_BODY, ITEM_ORDER) values (6, 6, '6. Identify whether the number of objects in one group is greater than, less than, or equal to the number of objects in another group, e.g., by using matching and counting strategies.', 'G6', '~Name~ will identify whether the number of objects in one group is greater than, less than, or equal to the number of objects in another group, e.g., by using matching and counting strategies.', 10);
insert into DC_GOAL (GOAL_ID, GOAL_GROUP_ID, GOAL_TITLE, GOAL_CD, GOAL_BODY, ITEM_ORDER) values (7, 6, '7. Compare two numbers between 1 and 10 presented as written numerals', 'G7', '~Name~ Compare two numbers between 1 and 10 presented as writtene numerals', 20);
insert into DC_GOAL (GOAL_ID, GOAL_GROUP_ID, GOAL_TITLE, GOAL_CD, GOAL_BODY, ITEM_ORDER) values (8, 8, '1. Represent addition and subtraction with objects, fingers, mental images, drawings, sounds (e.g., claps), acting out situations, verbal explanations, expressions, or equations.', 'G8', '~Name~ will represent addition and subtraction with objects, fingers, mental images, drawings2, sounds (e.g., claps), acting out situations, verbal explanations, expressions, or equations.', 10);

CREATE OR REPLACE 
ALGORITHM = MERGE
VIEW invoice_info AS
SELECT stud.student_id studentId, stud.student_name studentName, stud.birth_dt birthDt, stud.osis_no osisNo, stud.primary_responsible_person prp, stud.address studentAddress,
stud.mother_name, stud.father_name, 
ssr.school_representative_id, ssr.school_representative_name,
d.district_id districtId, d.district_name as districtName,
sv.session_length as sessionLength, sv.session_weekly as sessionWeekly, sv.billing_rate as billingRate, sv.case_no as caseNo,
prov.provider_id providerId, prov.first_name providerFirstName, prov.last_name providerLastName, 
prov.ss_no ssNo, prov.address providerAddress, prov.cell_phone_no providerPhone, prov.email providerEmail,
svt.service_type_no serviceTypeNo, svt.type_name serviceTypeName,
a.assignment_id assignmentId
FROM ST_STUDENT stud
LEFT JOIN ST_SCHOOL_REPRESENTATIVE ssr ON ssr.school_representative_id = stud.school_representative_id
INNER JOIN DC_DISTRICT d ON d.district_id = stud.district_id
INNER JOIN ST_SERVICE sv ON sv.student_id = stud.student_id
INNER JOIN PD_SERVICE_TYPE svt ON svt.service_type_no = sv.service_type_no
INNER JOIN SE_ASSIGNMENT a ON a.service_id = sv.service_id
INNER JOIN PR_PROVIDER prov ON prov.provider_id = a.provider_id;

insert into DC_GOAL (GOAL_ID, GOAL_GROUP_ID, GOAL_TITLE, GOAL_CD, GOAL_BODY, ITEM_ORDER) values (8, 8, '1. Represent addition and subtraction with objects, fingers, mental images, drawings, sounds (e.g., claps), acting out situations, verbal explanations, expressions, or equations.', 'G8', '~Name~ will represent addition and subtraction with objects, fingers, mental images, drawings2, sounds (e.g., claps), acting out situations, verbal explanations, expressions, or equations.', 10);
