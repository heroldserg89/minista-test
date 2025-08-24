import './Logo.scss'
import clsx from 'clsx'
import logoScr from '../../../public/images/logo.svg';
export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="./"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src={logoScr}
        alt=""
        width={200}
        height={68}
        loading={loading}
      />
    </a>
  )
}
