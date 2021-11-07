import React from 'react';
import Banner from '../../components/Banner';
import Content from './Content';
import data from '../../constants/data';

const Contact = () => {
  const { banner, title, subTitle } = data.contact;

  return (
    <>
      <Banner
        image={banner}
        title={title}
        subTitle={subTitle}
      />
      <Content />
    </>
  )
};

export default Contact;
