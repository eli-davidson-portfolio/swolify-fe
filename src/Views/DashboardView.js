import React from 'react';

import { WinLossRatioChart } from '../Components/WinLossRatioChart';
import { GameStats } from '../Components/GameStats';
import { GameSelectionForm } from '../Components/GameSelectionForm'
import { HistoryContainer } from '../Components/HistoryContainer'
import '../Styles/DashboardView.css'

export const DashboardView = () => {

  return (
    <>
    <h1>Dashboard</h1>
    <GameSelectionForm />
    <section className="game-data-section">
      <WinLossRatioChart/>
      <GameStats />
    </section>
    <h2>History</h2>
    <HistoryContainer/>
    </>
  )


}