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

            if (user.experience) {
                const experience = `<li>${user.experience}</li>`;
                document.querySelector('#workExperience').insertAdjacentHTML('beforeend', experience);
            }

            // Projects
            if (user.projectName) {
                const projectName = `<p>${user.projectName}</p>`;
                document.querySelector('#projects').insertAdjacentHTML('beforeend', projectName);
            }

            if (user.experience2) {
                const experience2 = `<li>${user.experience2}</li>`;
                document.querySelector('#projects').insertAdjacentHTML('beforeend', experience2);
            }
        });
    })
    .catch(error => console.log(error));
