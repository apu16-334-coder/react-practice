import { useState } from "react";

function DeveloperRegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        isAvailable: false,
        bio: ''
    });

    const [errors, setErrors] = useState({})

    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // for reacheck reset errors
        setErrors({})

        let errorFlag = false;

        if (!formData.name) {
            setErrors(prev => ({ ...prev, name: 'Name cannot be empty' }));
            errorFlag = true;
        }

        if (!formData.email.includes('@')) {
            setErrors(prev => ({ ...prev, email: 'Email must contain @' }))
            errorFlag = true;
        }

        if (formData.password.length < 6) {
            setErrors(prev => ({ ...prev, password: 'Password must be at least 6 characters' }))
            errorFlag = true;
        }

        if(errorFlag) return;

        setIsSuccess(true);

        // reset form
        setFormData({
            name: '',
            email: '',
            password: '',
            role: '',
            isAvailable: false,
            bio: ''
        })

         setTimeout(() => setIsSuccess(false), 3000)
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    return (
        <>
            <form onSubmit={handleSubmit} autoComplete="on">

                <div>
                    <label>Enter Name: </label>
                    <input name="name" type="text" value={formData.name} onChange={handleChange} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div> <br />
                <div>
                    <label>Enter Email: </label>
                    <input name="email" type="text" value={formData.email} onChange={handleChange} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div> <br />
                <div>
                    <label>Enter Password: </label>
                    <input name="password" type="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div> <br />
                <div>
                    <label >Choose a role:</label>
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="">Select a role</option>
                        <option value="junior">Junior Developer</option>
                        <option value="senior">Senior Developer</option>
                        <option value="full stack">Full Stack Developer</option>
                    </select>
                </div><br />

                <div>
                    <input type="checkbox" name="isAvailable" checked={formData.isAvailable} onChange={handleChange} />
                    <label>Open to work</label>
                </div> <br />

                <div>
                    <div><label>Enter Your Bio:</label></div>
                    <textarea name="bio" rows={10} cols={120} maxLength={200} placeholder="write here..." value={formData.bio} onChange={handleChange}></textarea>
                </div><br />

                <button type="submit">Submit</button>

                {isSuccess && <h2>Registration is Succesfull</h2>}

            </form>
        </>
    )
}

export default DeveloperRegistrationForm;