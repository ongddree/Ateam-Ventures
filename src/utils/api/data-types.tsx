import React from 'react';

export interface IRequests {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

export interface RequestsArray extends Array<IRequests> {
  method: string[];
}

export type IGetData = React.Dispatch<
  React.SetStateAction<RequestsArray | null>
>;
