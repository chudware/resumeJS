fetch('resume.json')
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS");
        } else {
            console.log("FAILED");
        }
        return res.json();
    })
    .then(data => {
        data.forEach(user => {
            if (user.name) {
                const name = `<h1>${user.name}'s Resume</h1>`;
                document.querySelector('#info').insertAdjacentHTML('beforeend', name);
            }

            if (user.email) {
                const email = `<p>Email: <a href="mailto:${user.email}">${user.email}</a></p></p>`;
                document.querySelector('#info').insertAdjacentHTML('beforeend', email);
            }

            if (user.phoneNumber) {
                const phoneNumber = `<p>Phone number: ${user.phoneNumber}</p>`;
                document.querySelector('#info').insertAdjacentHTML('beforeend', phoneNumber);
            }

            if (user.github) {
                const github = `<p>GitHub: <a href="https://www.github.com/${user.github}">@${user.github}</a></p>`;
                document.querySelector('#info').insertAdjacentHTML('beforeend', github);
            }

            // Work Experience
            if (user.companyName) {
                const companyName = `<p>${user.companyName}</p>`;
                document.querySelector('#workExperience').insertAdjacentHTML('beforeend', companyName);
            }

            if (user.workExperience) {
                const workExperience = `<li>${user.workExperience}</li>`;
                document.querySelector('#workExperience').insertAdjacentHTML('beforeend', workExperience);
            }

            if (user.workExperience2) {
                const workExperience2 = `<li>${user.workExperience2}</li>`;
                document.querySelector('#workExperience').insertAdjacentHTML('beforeend', workExperience2);
            }

            if (user.workExperience3) {
                const workExperience3 = `<li>${user.workExperience3}</li>`;
                document.querySelector('#workExperience').insertAdjacentHTML('beforeend', workExperience3);
            }

            if (user.workExperience4) {
                const workExperience4 = `<li>${user.workExperience4}</li>`;
                document.querySelector('#workExperience').insertAdjacentHTML('beforeend', workExperience4);
            }

            // Projects
            if (user.projectName) {
                const projectName = `<p>${user.projectName}</p>`;
                document.querySelector('#projects').insertAdjacentHTML('beforeend', projectName);
            }

            if (user.projectExperience) {
                const projectExperience = `<li>${user.projectExperience}</li>`;
                document.querySelector('#projects').insertAdjacentHTML('beforeend', projectExperience);
            }

            if (user.projectExperience2) {
                const projectExperience2 = `<li>${user.projectExperience2}</li>`;
                document.querySelector('#projects').insertAdjacentHTML('beforeend', projectExperience2);
            }

            if (user.projectExperience3) {
                const projectExperience3 = `<li>${user.projectExperience3}</li>`;
                document.querySelector('#projects').insertAdjacentHTML('beforeend', projectExperience3);
            }

            if (user.projectExperience4) {
                const projectExperience4 = `<li>${user.projectExperience4}</li>`;
                document.querySelector('#projects').insertAdjacentHTML('beforeend', projectExperience4);
            }
        });
    })
    .catch(error => console.log(error));
