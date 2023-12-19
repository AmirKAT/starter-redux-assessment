import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSuggestion,
  selectError,
  selectLoading,
  selectSuggestion,
} from './suggestion.slice';
import './suggestion.css';

export default function Suggestion() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const suggestion = useSelector(selectSuggestion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuggestion());
  }, [dispatch]);

  let render;
  if (loading) {
    render = <h3>Loading...</h3>;
  } else if (error) {
    render = <h3>Sorry, we're having trouble loading the suggestion.</h3>;
  } else if (suggestion) {
    render = (
      <>
        <img alt={suggestion.caption} src={suggestion.imageUrl} />
        <p>{suggestion.caption}</p>
      </>
    );
  }

  return (
    <section className="suggestion-container">
      <h2>Suggestion of the Day</h2>
      {render}
    </section>
  );
}
