--TO DO:
--check objects and fix surveys
-- data to and from database (for template to page)*
-- so routes
-- AJAX call fill data*
-- check react pages
-- understand server and routes*
-- justin is making login into react
-- algorithm for the survey*
-- wednesday meeting about server.js and routes
-- note view schedule = booking page
-- WED: piece together

-- Client Profile Data: template Data to database
-- used for profile only
-- EDIT SURVEY TO TAKE URLS

INSERT INTO clientPro
    (clientId, clientName, email, phone, City, locState, img, q1, q2, q3, q4)


-- Client Survey Data: template Data to database 
-- used to make a match
-- check quiz object (adjust the Qs)

--JSON OBJECT from SURVEY.JS
-- valuesHash {
--  Contact Information: {Firstname: " ", Lastname " ", Email ""}
--  Upload Profile Picture: [{name: " ", type: " ", content: " " }]
-- question1: ["item1", "item2"]
-- question2: ["item1", "item2"]
-- question3: ""
-- question4: ""



INSERT INTO clientSurvey
    (clientId, clientName, q1, q2, q3, q4, q5, q6)
values
    ('', 'Bobby Brown', '', '', '', '', '', '')



-- Instructor Profile Data: template Data to database
-- used for profile page
-- used for instructor search page 

--JSON OBJECT from SURVEY.JS
-- valuesHash {
--  question1: [item1, item2]
-- }

INSERT INTO instructorPro
    (insId, instructorName, email, phone, loc, img, q1, q2, q3, q4, q5, q6, q7)



--JSON OBJECT from SURVEY.JS
-- valuesHash {
--  Contact Information: {Firstname: " ", Lastname " ", Email ""}
--  Upload Profile Picture: [{name: " ", type: " ", content: " " }]
--  question1: [item1, item2],
--  question2: ["url.com"],
--  question3: [item1, item2],
--  question4: [item1, item2],
--  question5: [item1, item2],
--  question6: [item1, item2],
--  question7: [item1, item2],

--NOTE
-- the survey numbered the questions as: 4, 5, 6, 7, 3, 2



-- Instructor Survey Data: template Data to database
--used to make a match

INSERT INTO instructorSurvey
    (insId, instructorName, studio, loc, q1, q2, q3, q4, q5, q6)
values
    ('', 'Bobby Brown', '', '', '', '', '', '')


-- instructor database
-- after search this goes into the card


--JSON OBJECT from SURVEY.JS
-- valuesHash {
--  question1: [item1, item2]
-- }

INSERT INTO search
    (insId, instructorName, email, phone, city, ste, img,)
values
    ('', '', '', '', '', '', '')



-- booking data (API -- just do AJAX call
-- see test in "MBOTest"
-- with instructor search name input
-- with view schedule click


