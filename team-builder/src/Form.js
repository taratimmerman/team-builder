import React from 'react'

export default function MemberCreator(props) {
    const { values, update, submit } = props

    const onChange = event => {
        const { name, value } = event.target;
        update(name, value);
    };

    const onSubmit = event => {
        event.preventDefault()
        submit();
    };

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label>
                    Name:
                    <input 
                    name='name'
                    type='text'
                    placeholder='type member name...'
                    maxLength='15'
                    value={values.name}
                    onChange={onChange} 
                    />
                </label>
                <label>
                    Email:
                    <input 
                    name='email'
                    type='email'
                    placeholder='type member email..'
                    maxLength='30'
                    value={values.email}
                    onChange={onChange} 
                    />
                </label>
                <label>
                    Role:
                    <input 
                    name='role' 
                    type='text'
                    placeholder='type member role...'
                    maxLength='15'
                    value={values.role}
                    onChange={onChange} 
                    />
                </label>
                <button>Add Team Member</button>
            </div>
        </form>
    );
}