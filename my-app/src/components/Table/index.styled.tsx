import styled from "styled-components";

const StyledTable = styled.div`
  align-items: center;
  margin:0 30px;
  table {
    table-layout: fixed;
    width: 100%;
  }
  th {
    padding-bottom: 20px;
  }
  thead {
    font-size: 30px;
    th.width22 {
      width: 22%;
    }
    th.width24{
      width: 24%;
    }
  }

  tbody {
    th {
      
    }
  }

  .hiddenMenu {
    display: none;
  }

  .hiddenMenu.is-open {
    display: flex;
    flex-direction: column;
    ul li {
      list-style: none;
    }
  }
`

export default StyledTable;