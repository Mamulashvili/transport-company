export const TextOnly = ({ t }) => {
  return (
    <div className='my-5'>
      <h1> {t('whyUs')} </h1>
      <p className='mt-3'> {t('whyUsDesc')} </p>
      <small className='mt-3 fw-bold'>{t('whyUsPriority')}</small>
    </div>
  );
};