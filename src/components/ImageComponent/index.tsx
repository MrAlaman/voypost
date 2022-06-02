import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

interface IImageComponentProps {
  nameImage: string;
  className: string;
}

export default ({ nameImage, className }: IImageComponentProps) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!nameImage) return;
    firebase
      .storage()
      .ref()
      .child(`image/${nameImage}`)
      .getDownloadURL()
      .then((res) => {
        setUrl(res);
      });
  }, [nameImage]);
  return <img src={url} alt="furniture" className={className} />;
};
