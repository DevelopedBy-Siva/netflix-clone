import React from 'react'
import { Container, Input, Text, Button } from './styles/opt-form'

export default function OptForm({children, ...rest}) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}

OptForm.Input = function OptFormInput({children, ...rest}) {
    return <Input {...rest} />
}

OptForm.Button = function OptFormButton({children, ...rest}) {
    return ( 
        <Button {...rest}>
            {children} <img src = "/images/icons/chevron-right.png" alt = "Try now" />
        </Button>
    )
}

OptForm.Text = function OptFormText({children, ...rest}) {
    return <Text {...rest}>{children}</Text>
}
