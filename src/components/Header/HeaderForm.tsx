import Input from '@components/ui/Input/Input';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import classes from '@components/Header/Header.module.css';
import useDynamicParams from '@hooks/useDynamicParams';
import useGetNews from '@hooks/useGetNews';
const HeaderForm = () => {
	const inputRef = useRef(null);
	const [input, setInput] = useState({ search: '', date: '' });
	const {updateDynamicParams} = useGetNews();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(input)
		updateDynamicParams({keyword: input.search, date: input.date})
		setInput({ search: '', date: '' });
  };
  return (
    <form className={classes['form']} onSubmit={handleSubmit}>
			<div  className={classes['form__search-input-wrap']}>
        <Input
          ref={inputRef}
          type="text"
          placeholder="검색어를 입력해주세요"
					onChange={handleChange}
					name='search'
          value={input.search}
        />
      </div>
			<div className={classes['form__input-date__wrap'] }>
        <Input
          ref={inputRef}
					type="date"
					name='date'
          value={input.date}
					onChange={handleChange}
					placeholder="date"
        />
			</div>
			<button className={classes['button'] } type='submit'></button>
    </form>
  );
};

export default HeaderForm;
