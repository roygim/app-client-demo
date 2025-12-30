'use client'

import { Box, InputGroup, Input, Button } from '@chakra-ui/react'
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FaRegEye, FaUserAlt } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

interface AddInputs {
    firstName: string
    lastName: string
    email: string
    newPassword: string
    confirmNewPassword: string
}

function AddUser() {
    const [showPassword, setShowPassword] = useState(false)

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors }
    } = useForm<AddInputs>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            newPassword: '',
            confirmNewPassword: '',
        }
    })

    let pwd = watch("newPassword")

    const addUserSubmit: SubmitHandler<AddInputs> = async (data) => {

    }

    return (
        <Box bg="white" borderWidth='1px' borderRadius='lg' padding='24px' shadow='lg' className='w-full sm:max-w-[468px]'>
            <form onSubmit={handleSubmit(addUserSubmit)}>
                <div className='space-y-4'>
                    <Controller
                        name="firstName"
                        control={control}
                        rules={{
                            required: 'required field',
                            minLength: { value: 2, message: 'minimum 2 letters' }
                        }}
                        render={({ field }) =>
                            <div>
                                <InputGroup
                                    startElement={<FaUserAlt />}
                                >
                                    <Input
                                        {...field}
                                        border="1px solid"
                                        borderColor="gray.300"
                                        placeholder='first name'
                                    />
                                </InputGroup>
                                {
                                    errors.firstName &&
                                    <span className='inline-block pt-[4px] pr-[8px] text-sm text-info-error'>
                                        {errors.firstName.message}
                                    </span>
                                }
                            </div>
                        }
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        rules={{
                            required: 'required field',
                            minLength: { value: 2, message: 'minimum 2 letters' }
                        }}
                        render={({ field }) =>
                            <div>
                                <InputGroup
                                    startElement={<FaUserAlt />}
                                >
                                    <Input
                                        {...field}
                                        border="1px solid"
                                        borderColor="gray.300"
                                        placeholder='last name'
                                    />
                                </InputGroup>
                                {
                                    errors.lastName &&
                                    <span className='inline-block pt-[4px] pr-[8px] text-sm text-info-error'>
                                        {errors.lastName.message}
                                    </span>
                                }
                            </div>
                        }
                    />
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'required field',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'email not valid'
                            }
                        }}
                        render={({ field }) =>
                            <div>
                                <InputGroup
                                    startElement={<MdEmail />}
                                >
                                    <Input
                                        {...field}
                                        border="1px solid"
                                        borderColor="gray.300"
                                        placeholder='email'
                                    />
                                </InputGroup>
                                {
                                    errors.email &&
                                    <span className='inline-block pt-[4px] pr-[8px] text-sm text-info-error'>
                                        {errors.email.message}
                                    </span>
                                }
                            </div>
                        }
                    />
                    <Controller
                        name="newPassword"
                        control={control}
                        rules={{
                            required: 'required field',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/,
                                message: 'password not valid. 8-12 letters, At least one number, one uppercase letter and one special character'
                            }
                        }}
                        render={({ field }) =>
                            <div>
                                <InputGroup
                                    startElement={<RiLockPasswordFill />}
                                    endElement={
                                        <button
                                            type='button'
                                            onMouseDown={(e) => {
                                                e.preventDefault()
                                                setShowPassword(true)
                                            }}
                                            onMouseUp={(e) => {
                                                e.preventDefault()
                                                setShowPassword(false)
                                            }}
                                        >
                                            <FaRegEye />
                                        </button>
                                    }
                                >
                                    <Input
                                        {...field}
                                        type={showPassword ? 'text' : 'password'}
                                        border="1px solid"
                                        borderColor="gray.300"
                                        placeholder='password'
                                    />
                                </InputGroup>
                                {
                                    errors.newPassword &&
                                    <span className='inline-block pt-[4px] pr-[8px] text-sm text-info-error'>
                                        {errors.newPassword.message}
                                    </span>
                                }
                            </div>
                        }
                    />
                    <Controller
                        name="confirmNewPassword"
                        control={control}
                        rules={{
                            required: 'required field',
                            validate: value => value.trim() === pwd.trim() || "confirm password not valid"
                        }}
                        render={({ field }) =>
                            <div>
                                <InputGroup
                                    startElement={<RiLockPasswordFill />}
                                >
                                    <Input
                                        {...field}
                                        type='password'
                                        border="1px solid"
                                        borderColor="gray.300"
                                        placeholder='confirm password'
                                    />
                                </InputGroup>
                                {
                                    errors.confirmNewPassword &&
                                    <span className='inline-block pt-[4px] pr-[8px] text-sm text-info-error'>
                                        {errors.confirmNewPassword.message}
                                    </span>
                                }
                            </div>
                        }
                    />
                </div>
                <Button
                    type='submit'
                    variant='solid'
                    width='full'
                    borderRadius={0}
                    className='mt-8'
                >
                    Add User
                </Button>
            </form>
        </Box>
    )
}

export default AddUser