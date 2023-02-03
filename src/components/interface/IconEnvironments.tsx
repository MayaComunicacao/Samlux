import React from 'react';

interface IconPropd {
  cor: string;
  size: string;
}

export const IconTable = ({ cor, size }: IconPropd) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
    >
      <g></g>
      <g>
        <g>
          <g>
            <path
              fill="nome"
              stroke={cor}
              d="M50,20.7c-0.2,0-0.4-0.2-0.4-0.4V6c0-0.2,0.2-0.4,0.4-0.4s0.4,0.2,0.4,0.4v14.4C50.4,20.6,50.2,20.7,50,20.7z"
            />
          </g>
          <g>
            <path
              fill="nome"
              stroke={cor}
              d="M50,89.6c-0.2,0-0.4-0.2-0.4-0.4V40.6c0-0.2,0.2-0.4,0.4-0.4s0.4,0.2,0.4,0.4v48.6C50.4,89.4,50.2,89.6,50,89.6z"
            />
          </g>
          <g>
            <path
              fill="nome"
              stroke={cor}
              d="M63.8,94.4H36.2c-0.2,0-0.4-0.2-0.4-0.4v-0.5c0-2.6,2.1-4.7,4.7-4.7h18.9c2.6,0,4.7,2.1,4.7,4.7V94
				C64.2,94.2,64,94.4,63.8,94.4z M36.6,93.6h26.9v-0.1c0-2.2-1.8-4-4-4H40.5C38.3,89.6,36.6,91.3,36.6,93.6L36.6,93.6z"
            />
          </g>
          <g>
            <path
              fill="nome"
              stroke={cor}
              d="M74.8,41H25.2c-0.9,0-1.8-0.4-2.3-1.2c-0.5-0.7-0.7-1.7-0.4-2.6l4.9-15.1c0.4-1.1,1.4-1.9,2.7-2.1c0,0,0,0,0.1,0h39.8
				c0,0,0,0,0.1,0c1.3,0.2,2.3,1,2.7,2.1l0.2,0.6l4.7,14.5c0.3,0.9,0.1,1.8-0.4,2.6C76.6,40.6,75.7,41,74.8,41z M30.1,20.7
				c-1,0.2-1.8,0.8-2.1,1.6L27.9,23l-4.7,14.5c-0.2,0.7-0.1,1.3,0.3,1.9c0.4,0.6,1,0.9,1.7,0.9h49.6c0.7,0,1.3-0.3,1.7-0.9
				c0.4-0.6,0.5-1.3,0.3-1.9l-4.9-15.1c-0.3-0.8-1.1-1.5-2.1-1.6H30.1z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const IconWall = ({ cor, size }: IconPropd) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
    >
      <g></g>
      <g>
        <g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M58.3,45.7c-0.2,0-0.3-0.1-0.3-0.3V41c0-1.9-1.9-3.5-4.5-3.8l-30.8-3c-2.5-0.2-5-0.6-7.5-0.9l-4.5-0.7
				C10,32.5,9.5,32.3,9.1,32c-0.5-0.4-0.7-0.9-0.5-1.4c0.1-0.6,0.7-1.1,1.4-1.2c0,0,0,0,0.1,0h12c0.2,0,0.3,0.1,0.3,0.3
				S22.2,30,22,30H10.1c-0.5,0.1-0.8,0.4-0.9,0.7c-0.1,0.3,0.1,0.5,0.3,0.8c0.3,0.3,0.7,0.4,1.2,0.5l4.5,0.7c2.5,0.4,5,0.7,7.5,0.9
				l30.8,3c2.9,0.3,5.1,2.2,5.1,4.4v4.3C58.6,45.5,58.4,45.7,58.3,45.7z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M91.1,73.5C91.1,73.5,91.1,73.5,91.1,73.5l-10.7,0c0,0-0.1,0-0.1,0l-0.1,0c0,0,0,0,0,0L63,71.8c-2.9-0.3-5.1-2.2-5.1-4.4
				V63c0-0.2,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3v4.3c0,1.9,1.9,3.5,4.5,3.8l17,1.7c0.2-2.3,2.7-4.1,5.7-4.1c3.1,0,5.7,2,5.7,4.4
				c0,0.1,0,0.2-0.1,0.2S91.2,73.5,91.1,73.5z M80.7,72.8l10.1,0c-0.2-1.9-2.4-3.5-5-3.5C83.1,69.4,80.9,70.9,80.7,72.8z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M21.8,30c-0.2,0-0.3-0.1-0.3-0.3c0-2.1-2.3-3.8-5.1-3.8s-5.1,1.7-5.1,3.8c0,0.2-0.1,0.3-0.3,0.3s-0.3-0.1-0.3-0.3
				c0-2.4,2.6-4.4,5.7-4.4s5.7,2,5.7,4.4C22.1,29.8,22,30,21.8,30z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M19.7,31.3h-6.4c-1.3,0-2.4-0.7-2.4-1.6c0-0.2,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3c0,0.4,0.7,0.9,1.8,0.9h6.4
				c1,0,1.8-0.5,1.8-0.9c0-0.2,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3C22.1,30.6,21.1,31.3,19.7,31.3z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M58.6,63.4h-0.7c-0.8,0-1.4-0.6-1.4-1.4V46.4c0-0.8,0.6-1.4,1.4-1.4h0.7c0.8,0,1.4,0.6,1.4,1.4v15.5
				C60.1,62.7,59.4,63.4,58.6,63.4z M57.9,45.7c-0.4,0-0.8,0.4-0.8,0.8v15.5c0,0.4,0.4,0.8,0.8,0.8h0.7c0.4,0,0.8-0.4,0.8-0.8V46.4
				c0-0.4-0.4-0.8-0.8-0.8H57.9z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M89,74.8h-6.4c-1.3,0-2.4-0.7-2.4-1.6c0-0.2,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3c0,0.4,0.7,0.9,1.8,0.9H89
				c1,0,1.8-0.5,1.8-0.9c0-0.2,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3C91.5,74.1,90.4,74.8,89,74.8z"
            />
          </g>
          <g>
            <path fill="none" stroke={cor} className="st0" d="M91.1,73.1" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const IconFloor = ({ cor, size }: IconPropd) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
    >
      <g></g>
      <g>
        <g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M26.2,95.6c-0.1,0-0.2-0.1-0.2-0.2V32.8c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2v62.5
				C26.5,95.5,26.4,95.6,26.2,95.6z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M52.2,7C51.5,7,51,6.4,51,5.7c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3C53.5,6.4,52.9,7,52.2,7z M52.2,4.9
				c-0.4,0-0.8,0.3-0.8,0.8c0,0.4,0.3,0.8,0.8,0.8S53,6.1,53,5.7C53,5.3,52.7,4.9,52.2,4.9z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M26.2,31c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4L51.1,5.5c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4L26.4,30.9
				C26.4,31,26.3,31,26.2,31z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M68.8,21.5c-0.1,0-0.1,0-0.2-0.1L53.1,5.9c-0.1-0.1-0.1-0.3,0-0.4c0.1-0.1,0.3-0.1,0.4,0L69,21c0.1,0.1,0.1,0.3,0,0.4
				C68.9,21.4,68.9,21.5,68.8,21.5z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M26.2,33c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3C27.5,32.5,26.9,33,26.2,33z M26.2,31
				c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8c0.4,0,0.8-0.3,0.8-0.8S26.7,31,26.2,31z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M29,95.6h-5.5c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2H29c0.1,0,0.2,0.1,0.2,0.2C29.2,95.5,29.1,95.6,29,95.6z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M74.8,33.9H62.8c-0.6,0-1.1-0.3-1.5-0.7c-0.4-0.4-0.5-1-0.5-1.6c0,0,0,0,0,0l2.9-8.9c0.3-1,1.2-1.6,2.3-1.6h5.5
				c1,0,1.9,0.7,2.3,1.6l2.9,8.9c0,0,0,0,0,0c0.1,0.6-0.1,1.2-0.5,1.6C75.9,33.6,75.3,33.9,74.8,33.9z M61.3,31.7
				c-0.1,0.4,0.1,0.9,0.3,1.2c0.3,0.3,0.7,0.5,1.1,0.5h11.9c0.4,0,0.9-0.2,1.1-0.5c0.3-0.3,0.4-0.8,0.3-1.2l-2.9-8.9c0,0,0,0,0,0
				c-0.3-0.8-1-1.3-1.8-1.3H66c-0.8,0-1.5,0.5-1.8,1.3L61.3,31.7z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const IconRoof = ({ cor, size }: IconPropd) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
    >
      <g></g>
      <g>
        <g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M86.3,50.5H13.7c-0.6,0-1-0.4-1.1-0.9c-0.1-0.6,0.2-1.1,0.8-1.2L47,38.4c2-0.6,4.1-0.6,6.1,0l33.6,9.9
				c0.5,0.2,0.9,0.7,0.8,1.2C87.3,50.1,86.9,50.5,86.3,50.5z M50,38.5c-1,0-1.9,0.1-2.9,0.4l-33.6,9.9c-0.4,0.1-0.5,0.4-0.4,0.7
				s0.2,0.5,0.6,0.5h72.6c0.4,0,0.6-0.3,0.6-0.5c0-0.2-0.1-0.6-0.4-0.7l-33.6-9.9C51.9,38.6,51,38.5,50,38.5z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M72.3,62.5H27.7c-0.7,0-1.2-0.5-1.3-1.2c0,0,0,0,0,0c-0.1-0.5,0.2-1.1,0.7-1.3L48,50.4c1.3-0.6,2.7-0.6,4,0L72.9,60
				c0.5,0.2,0.8,0.7,0.7,1.3C73.6,62,73,62.5,72.3,62.5z M26.8,61.3c0,0.4,0.4,0.7,0.8,0.7h44.7c0.4,0,0.8-0.3,0.8-0.7
				c0-0.3-0.2-0.7-0.5-0.8l-20.9-9.6c-1.1-0.5-2.5-0.5-3.6,0l-20.9,9.6C27,60.6,26.8,60.9,26.8,61.3L26.8,61.3z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M50,27.6c-0.4,0-0.7-0.1-1-0.3l-9.9-6c-0.3-0.2-0.5-0.5-0.4-0.9c0-0.5,0.4-0.9,0.9-0.9h20.8c0.5,0,0.9,0.4,0.9,0.9
				c0,0.3-0.1,0.7-0.4,0.9l-9.9,6C50.7,27.5,50.4,27.6,50,27.6z M39.6,20.1c-0.2,0-0.4,0.2-0.5,0.4c0,0,0,0,0,0
				c0,0.2,0.1,0.3,0.2,0.4l9.9,6c0.5,0.3,1.1,0.3,1.6,0l9.9-6c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.2-0.4-0.5-0.4H39.6z M38.9,20.5
				L38.9,20.5L38.9,20.5z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M50,11.7c-0.1,0-0.2-0.1-0.2-0.2V6.8c0-0.1,0.1-0.2,0.2-0.2s0.2,0.1,0.2,0.2v4.7C50.2,11.6,50.1,11.7,50,11.7z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M50,20.1c-0.1,0-0.2-0.1-0.2-0.2v-4.3c0-0.1,0.1-0.2,0.2-0.2s0.2,0.1,0.2,0.2v4.3C50.2,20,50.1,20.1,50,20.1z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M50,38.5c-0.1,0-0.2-0.1-0.2-0.2V27.4c0-0.1,0.1-0.2,0.2-0.2s0.2,0.1,0.2,0.2v10.8C50.2,38.3,50.1,38.5,50,38.5z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M50,78.9c-0.1,0-0.2-0.1-0.2-0.2V62.2c0-0.1,0.1-0.2,0.2-0.2s0.2,0.1,0.2,0.2v16.4C50.2,78.8,50.1,78.9,50,78.9z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M50,93.5c-1.2,0-2.1-1-2.1-2.1V80.5c0-1.2,1-2.1,2.1-2.1s2.1,1,2.1,2.1v10.9C52.1,92.5,51.2,93.5,50,93.5z M50,78.9
				c-0.9,0-1.6,0.7-1.6,1.6v10.9c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6V80.5C51.6,79.6,50.9,78.9,50,78.9z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M50,15.7c-0.9,0-1.7-0.8-1.7-1.7v-1.1c0-0.9,0.8-1.7,1.7-1.7s1.7,0.8,1.7,1.7v1.1C51.7,15,50.9,15.7,50,15.7z M50,11.7
				c-0.7,0-1.2,0.5-1.2,1.2v1.1c0,0.7,0.5,1.2,1.2,1.2s1.2-0.5,1.2-1.2v-1.1C51.2,12.3,50.7,11.7,50,11.7z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke={cor}
              d="M52.5,7h-5.1c-0.1,0-0.2-0.1-0.2-0.2s0.1-0.2,0.2-0.2h5.1c0.1,0,0.2,0.1,0.2,0.2S52.7,7,52.5,7z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const IconGarden = ({ cor, size }: IconPropd) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
    >
      <g></g>
      <path
        fill="none"
        stroke={cor}
        d="M68,29.4c4.4-4.7,4.4-12.1,0-16.9c-2.3-2.4-5.3-3.8-8.6-4c-3.2-0.1-6.2,0.9-8.5,3c-0.1,0-0.1,0.1-0.1,0.1
	c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1L32.7,28.4c-5,4.7-5.3,12.5-0.7,17.5c2.1,2.3,5,3.6,7.9,3.9V57h-1.7
	c-0.8,0-1.6,0.4-2.1,1.1c-0.5,0.7-0.6,1.6-0.2,2.4l12.2,29.4c0.4,1,1.3,1.5,2.3,1.5c1,0,1.9-0.6,2.3-1.5L65,60.5
	c0.3-0.8,0.2-1.7-0.2-2.4c-0.5-0.7-1.2-1.1-2.1-1.1h-1.2V35.5l5.8-5.4C67.5,29.9,67.7,29.7,68,29.4C67.9,29.5,67.9,29.5,68,29.4
	C67.9,29.4,67.9,29.4,68,29.4z M58.9,9.9c0.1,0,0.3,0,0.4,0c3,0.1,5.7,1.4,7.7,3.5c3.8,4.1,3.9,10.4,0.4,14.6L52.1,12.2
	C54,10.7,56.4,9.9,58.9,9.9z M63.6,58.9c0.2,0.3,0.3,0.7,0.1,1.1L51.5,89.4c-0.2,0.5-0.6,0.7-1.1,0.7c-0.5,0-0.9-0.3-1.1-0.7
	L37.1,60c-0.2-0.4-0.1-0.8,0.1-1.1c0.2-0.3,0.6-0.5,1-0.5h24.4C63.1,58.4,63.4,58.5,63.6,58.9z M60.2,57H41.3v-7.2
	c3,0,6-1.1,8.3-3.3l10.6-9.9V57z M48.7,45.6C44.2,49.7,37.2,49.5,33,45c-4.2-4.5-3.9-11.5,0.6-15.7l17.5-16.2L66.5,29
	c0,0-0.1,0.1-0.1,0.1L48.7,45.6z"
      />
    </svg>
  );
};

export const IconOutside = ({ cor, size }: IconPropd) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
    >
      <path
        fill="none"
        stroke={cor}
        d="M61,8.5c-0.1-1.9-1.7-3.3-3.5-3.3h-0.6c-2,0-3.6,1.6-3.6,3.6v68.9c0,5.2-4.2,9.5-9.5,9.5c-2.3,0-4.5-0.8-6.2-2.3
	c-0.1-0.1-0.3-0.1-0.4,0c-0.1,0.1-0.1,0.3,0,0.4c1.8,1.6,4.1,2.4,6.5,2.4c4.4,0,8.2-2.9,9.5-6.9v13.9c0,0.1,0.1,0.2,0.2,0.2
	c0.1,0,0.2-0.1,0.2-0.2V8.7c0-1.7,1.4-3.1,3.1-3.1h0.6c1.6,0,2.9,1.3,3,2.8c-1,0.1-1.8,1-1.8,2.1v6.1c0,1.1,0.9,2.1,2.1,2.1
	c1.1,0,2.1-0.9,2.1-2.1v-6.1C62.8,9.5,62,8.6,61,8.5z M62.3,16.7c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6v-6.1
	c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6V16.7z"
      />
    </svg>
  );
};
