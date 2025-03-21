
        const levelSelect = document.getElementById('level-select');
        const subjectSelect = document.getElementById('subject-select');
        const subjectLabel = document.getElementById('subject-label');
        const contentDiv = document.getElementById('content');

        const subjects = {
            foundation: ['MathI', 'MathII','StatII'],
            // diploma: ['Engineering', 'Business'],
            // degree: ['Computer Science', 'Economics']
        };

        const content = {
            foundation: {
                MathI: `
                <br>
                    <h2>Maths</h2>
                    <br><h3>
                    <ul>
                        <li><a href="https://drive.google.com/file/d/10eJAnbz7uIPEwi6DUgxuEx2dUWc5u126/view?usp=sharing" target="_blank">Math I: Week 2</a></li>
                        <li><a href="https://drive.google.com/file/d/10pQPZa5SOwmus8QBsFObWFVSdPb1gT-9/view?usp=sharing" target="_blank">Math I: Week 3</a></li>
                        <li><a href="https://drive.google.com/file/d/11KZtnwZF3n2OKOt12RSRHlC6_EBEiIFb/view?usp=sharing" target="_blank">Math I: Week 4</a></li>
                        <li><a href="https://drive.google.com/file/d/11bbndH06lBiDd-V1IZZG5b0F_vJ2g1vT/view?usp=sharing" target="_blank">Math I: Week 5</a></li>
                        <li><a href="https://drive.google.com/file/d/12b4LHo8nnn_ho4zvpDdOGiB7D_Ztbv05/view?usp=sharing" target="_blank">Math I: Week 6</a></li>
                        <li><a href="https://drive.google.com/file/d/12tuYrxEDk7kjw_XR-LDMXLfUlh3auDY4/view?usp=sharing" target="_blank">Math I: Week 7</a></li>
                        <li><a href="https://drive.google.com/file/d/13QzJE310I94vySiZidgmocdn-F0O6yVq/view?usp=sharing" target="_blank">Math I: Week 8</a></li>
                        <!-- More weeks can be added here -->
                    </ul></h3>`,
                    MathII: `<br>
                    <h2>Maths</h2>
                    <br><h3>
                    <ul>
                        <li><a href="https://drive.google.com/file/d/1-8xyW86RaQi0aW5UqMJDYWtGufhHqZUL/view?usp=sharing" target="_blank">Math II: Week 1-4</a></li>
                        <li><a href="https://drive.google.com/file/d/1-NQcONoiVUDWOgRQxMs3IrYuy3pg4wAB/view?usp=sharing" target="_blank">Math II: Week 5-7</a></li>
                        <li><a href="https://drive.google.com/file/d/1-rACpgTE7yY3CEi69fbPmsQlmBA2gCE-/view?usp=sharing" target="_blank">Math II: Week 6</a></li>
                        <li><a href="https://drive.google.com/file/d/1-AyodBHqgRQPh8StNBEcWfz5uFOjXZqY/view?usp=sharing" target="_blank">Math II: Week 7</a></li>
                        <li><a href="https://drive.google.com/file/d/1-9LCBNTaP_vcyxzW51SQPeLXhqSPpmeo/view?usp=sharing" target="_blank">Math II: Week 8</a></li>
                        <li><a href="https://drive.google.com/file/d/10hRLcskrbS3_Nhy-_F9K-mexSn9WW1V4/view?usp=sharing" target="_blank">Math II: Week 9</a></li>
                        <li><a href="https://drive.google.com/file/d/1-B3dKHnnS7bMopGBTSigLe01KDP4u2gw/view?usp=sharing" target="_blank">Math II: Week 10</a></li>
                        <li><a href="https://drive.google.com/file/d/1-LJPmKj2SqbwHgytDwaRmmAs493Jm_km/view?usp=sharing" target="_blank">Math II: Week 11</a></li>
                        
                    </ul></h3>`,
                     StatII: `<br>
                    <h2>Maths</h2><h3>
                    <br>
                    <ul>
                        <li><a href="https://drive.google.com/file/d/1-1ArjoLAb3MntZ90pmD355j-00CwnehX/view?usp=sharing" target="_blank">Stat II: Week 0-1</a></li>
                        <li><a href="https://drive.google.com/file/d/14GPQ3BR_L2KG6IAUH8Us9PdfsjYCue5r/view?usp=sharing" target="_blank">Stat II: Week 2-3</a></li>
                        <li><a href="https://drive.google.com/file/d/1Aor4C0X6awaipYDyl3csBMAZgSdpdls6/view?usp=sharing" target="_blank">Stat II: Week 6</a></li>
                        <li><a href="https://drive.google.com/file/d/1I_8zQgojJH9UQZ7he9wG0JSK95j6NUvZ/view?usp=sharing" target="_blank">Stat II: Week 9-10</a></li>

                       

                    </ul></h3>`
            },
            diploma: {
                Engineering: `<h2>Engineering</h2><p>We are working to add more! If you have notes or insights to share, we'd love to hear from you. Contact us today and help us grow! </p>`,
                Business: `<h2>Business</h2><p>We are working to add more! If you have notes or insights to share, we'd love to hear from you. Contact us today and help us grow!</p>`
            },
            degree: {
                'Computer Science': `<h2>Computer Science</h2><p>We are working to add more! If you have notes or insights to share, we'd love to hear from you. Contact us today and help us grow!</p>`,
                Economics: `<h2>Economics</h2><p>We are working to add more! If you have notes or insights to share, we'd love to hear from you. Contact us today and help us grow!.</p>`
            }
        };

        levelSelect.addEventListener('change', function() {
            const selectedLevel = levelSelect.value;
            if (selectedLevel) {
                subjectLabel.classList.remove('hidden');
                subjectSelect.classList.remove('hidden');
                subjectSelect.innerHTML = `<option value="">--Please choose an option--</option>`;
                subjects[selectedLevel].forEach(subject => {
                    const option = document.createElement('option');
                    option.value = subject;
                    option.textContent = subject;
                    subjectSelect.appendChild(option);
                });
                contentDiv.classList.add('hidden');
            } else {
                subjectLabel.classList.add('hidden');
                subjectSelect.classList.add('hidden');
                contentDiv.classList.add('hidden');
            }
        });

        subjectSelect.addEventListener('change', function() {
            const selectedLevel = levelSelect.value;
            const selectedSubject = subjectSelect.value;
            if (selectedSubject) {
                contentDiv.innerHTML = content[selectedLevel][selectedSubject];
                contentDiv.classList.remove('hidden');
            } else {
                contentDiv.classList.add('hidden');
            }
        });
