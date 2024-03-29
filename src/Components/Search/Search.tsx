import { useRef, useContext, useEffect } from 'react';

import { MainContext } from '../../ReactDataTable/ReactDataTable';
import { IconButtonClose } from '../IconButton/IconButton';
import './Search.css';


export default function Search(): React.JSX.Element {
  const mainContext = useContext(MainContext);
  const txtSearch = useRef<HTMLInputElement>(null);
  const style = { color: mainContext.options?.color?.color, backgroundColor: mainContext.options?.color?.backgroundColor, borderColor: mainContext.options?.color?.borderColor }

  const searchTable = (value: string) => {
    mainContext.setSearchValue(value);
    txtSearch.current?.focus();
  }
  const onClose = () => {
    
    mainContext.setShowMenuSubItems({ ...mainContext.showMenuSubItems, search: false });
  }
  
  useEffect(() => {
    txtSearch.current?.focus();
  }, [])

  return (
    <>
      <div data-testid='rdt-search' className='rdtsearch' style={style}>
        <input type='text' ref={txtSearch} className='rdtsearch__input' value={mainContext.searchValue} onChange={(event) => searchTable(event.target.value)} placeholder={mainContext.options?.searchPlaceholder} />
        <button className='rdtsearch__close' >
          <IconButtonClose width={18} onClick={onClose} />
        </button>
      </div>
    </>
  )
}