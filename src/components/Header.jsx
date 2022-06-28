import HeroBg from '../assets/images/h1_hero.jpg.webp';
import { Button } from 'react-bootstrap';

export const Header = ({ t }) => {
  return (
    <>
      <header
        style={{ backgroundImage: `url(${HeroBg})` }}>
        <div>
          <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: t("headerHero") }} />
          <p className="mt-4" dangerouslySetInnerHTML={{ __html: t("headerDesc") }} />
          <Button
            href="#"
            variant='primary px-5'>
            {t("contact")}
          </Button>
        </div>
      </header>
    </>
  );
};