import React from 'react';

const Map = ({ className }) => {
  return (
    <iframe
      className={className}
      title="google map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.278068125209!2d121.26895581498655!3d24.956652247541676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346818a581ed84e7%3A0xf3de03a55f9ebb70!2zMzM05qGD5ZyS5biC5YWr5b635Y2A5buj56aP6LevMTEyM-W3tzUx6Jmf!5e0!3m2!1szh-TW!2stw!4v1635600123510!5m2!1szh-TW!2stw"
      loading="lazy">

    </iframe>
  )
};

export default Map;