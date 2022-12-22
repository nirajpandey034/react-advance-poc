import React from 'react';
import { DevTool } from '@hookform/devtools';
import { Container, TextField, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../Schema/UserSchema';

import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/User/UserActions';

function UserForm() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const submitForm = (data) => {
    console.log(data);
    dispatch(addUser(data));
    reset();
  };
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(submitForm)}>
        <Stack direction="column">
          <TextField label="Name" type="text" {...register('name')}></TextField>
          <p style={{ color: 'red' }}>{errors?.name?.message}</p>
          <TextField
            label="email"
            type="email"
            {...register('email')}
          ></TextField>
          <p style={{ color: 'red' }}>{errors?.email?.message}</p>
          <TextField
            label="password"
            type="password"
            {...register('password')}
          ></TextField>
          <p style={{ color: 'red' }}>{errors?.password?.message}</p>
          <TextField type="date" {...register('dob')}></TextField>
          <p style={{ color: 'red' }}>{errors?.dob?.message}</p>
          <Button type="submit" variant="contained" size="small">
            Submit
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </Container>
  );
}

export default UserForm;
