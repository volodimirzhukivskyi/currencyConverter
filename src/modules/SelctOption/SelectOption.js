const SelectOption = (props) => {
  const{acronym,rate}=props
    return  ( <option  value={rate}>
     {acronym}
    </option>)
}
export default SelectOption