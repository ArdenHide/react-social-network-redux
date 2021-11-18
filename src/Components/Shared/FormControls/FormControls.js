import React from "react"
import { MDBInput, MDBCheckbox } from "mdb-react-ui-kit"

export const Textarea = ({ input, meta, ...props }) => {
    if (!meta.valid && !meta.touched) {
        return (
            <MDBInput {...input} {...props} textarea />
        )
    } else if (!meta.valid && meta.touched) {
        return (
            <MDBInput {...input} {...props} textarea validation={meta.error} className='is-invalid' invalid />
        )
    } else {
        return (
            <MDBInput {...input} {...props} textarea />
        )
    }
}

export const Input = ({ input, meta, ...props }) => {
    if (!meta.valid && !meta.touched) {
        return (
            <MDBInput {...input} {...props} />
        )
    } else if (!meta.valid && meta.touched) {
        return (
            <MDBInput {...input} {...props} validation={meta.error} className='is-invalid' invalid />
        )
    } else {
        return (
            <MDBInput {...input} {...props} />
        )
    }
}

export const Password = ({ input, meta, ...props }) => {
    if (!meta.valid && !meta.touched) {
        return (
            <MDBInput {...input} {...props} type='password' />
        )
    } else if (!meta.valid && meta.touched) {
        return (
            <MDBInput {...input} {...props} type='password' validation={meta.error} className='is-invalid' invalid />
        )
    } else {
        return (
            <MDBInput {...input} {...props} type='password' />
        )
    }
}

export const Email = ({ input, meta, ...props }) => {
    if (!meta.valid && !meta.touched) {
        return (
            <MDBInput {...input} {...props} type='email' />
        )
    } else if (!meta.valid && meta.touched) {
        return (
            <MDBInput {...input} {...props} type='email' validation={meta.error} className='is-invalid' invalid />
        )
    } else {
        return (
            <MDBInput {...input} {...props} type='email' />
        )
    }
}

export const Checkbox = ({ input, meta, ...props }) => {
    if (!meta.valid && !meta.touched) {
        return (
            <MDBCheckbox {...input} {...props} />
        )
    } else if (!meta.valid && meta.touched) {
        return (
            <MDBCheckbox {...input} {...props} validation={meta.error} className='is-invalid' invalid />
        )
    } else {
        return (
            <MDBCheckbox {...input} {...props} />
        )
    }
}