import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'; // Forms
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup'; // for React-hook-form work with Yup
import * as yup from 'yup'; // Form validation
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { Form, Title } from './UpdateContactForm.styled';
import { Input } from '../Input/Input';
import { updateContact } from 'redux/contacts/contactsOperations';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name should be at least 4 characters')
    .max(20, 'Name should be at most 20 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const UpdateContactForm = ({ name, number, id, closeModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { ...INITIAL_STATE, name, number },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    dispatch(updateContact({ ...data, id }));
    closeModal();
    reset();
  };

  return (
    <>
      <Title>Update Contact</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          placeholder="Name"
          register={register}
          error={errors.name}
        />
        <Input
          type="tel"
          name="number"
          placeholder="Phone number"
          register={register}
          error={errors.number}
        />
        <Box
          display={['flex']}
          justifyContent={'space-between'}
          maxWidth="220px"
          mx="auto"
          flexDirection={['column', 'column', 'row', 'row']}
          gridGap="16px"
        >
          <Button type="submit" name="primary">
            Update
          </Button>
          <Button name="primary" onClick={closeModal}>
            Cancel
          </Button>
        </Box>
      </Form>
    </>
  );
};

UpdateContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
