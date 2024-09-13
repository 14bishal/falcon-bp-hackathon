import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';



import '../../../App.css'

function EnterPincode() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        navigate('/asm/list')
        console.log('Form submitted:', data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-content'>
                    <label htmlFor="pincode">Enter Pincode</label>
                    <input
                        type="number"
                        id="pincode"
                        placeholder="120001"
                        {...register('pincode', {
                            required: 'Pincode is required.',
                            pattern: {
                                value: /^\d{6}$/,
                                message: 'Pincode must be a 6-digit number.',
                            },
                        })}
                    />
                    {errors.pincode && <div className="error">{errors.pincode.message}</div>}
                </div>

                <div className='form-content'>
                    <label htmlFor="lead_creation_number">Enter number of lead creation</label>
                    <input
                        type="number"
                        min={0}
                        id="lead_creation_number"
                        placeholder="10"
                        {...register('leadCreationNumber', {
                            required: 'Number of lead creation is required.',
                            min: { value: 1, message: 'Number of lead creation must be a positive number.' },
                        })}
                    />
                    {errors.leadCreationNumber && <p className="error">{errors.leadCreationNumber.message}</p>}
                </div>

                <input type="submit" value="Generate Lead" id="submit" style={{marginTop: '16px'}} />
            </form>
        </>
    );
}

export default EnterPincode;