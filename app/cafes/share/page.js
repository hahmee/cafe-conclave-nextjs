  'use client';

  import { useFormState } from 'react-dom';

  import ImagePicker from '@/components/cafes/image-picker';
  import classes from './page.module.css';
  import { shareCafe } from '@/lib/actions';
  import CafesFormSubmit from '@/components/cafes/cafes-form-submit';

  export default function ShareCafePage() {
    const [state, formAction] = useFormState(shareCafe, { message: null });

    return (
      <>
        <header className={classes.header}>
          <h1>
            <span className={classes.highlight}>최고의 카페</span>를 공유해보세요!
          </h1>
          <p>
            떠오르는 감동적인 순간부터 잊지 못할 커피 한 잔의 이야기까지,<br/> 당신이 직접 경험한 카페의 매력을 자유롭게 공유해 주세요.
          </p>
        </header>
        <main className={classes.main}>
          <form className={classes.form} action={formAction}>
            <div className={classes.row}>
              <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" required />
              </p>
              <p>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" name="email" required />
              </p>
            </div>
            <p>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" required />
            </p>
            <p>
              <label htmlFor="summary">Short Summary</label>
              <input type="text" id="summary" name="summary" required />
            </p>
            <p>
              <label htmlFor="instructions">Instructions</label>
              <textarea
                id="instructions"
                name="instructions"
                rows="10"
                required
              ></textarea>
            </p>
            <ImagePicker label="Your image" name="image" />
            {state.message && <p>{state.message}</p>}
            <p className={classes.actions}>
              <CafesFormSubmit />
            </p>
          </form>
        </main>
      </>
    );
  }
