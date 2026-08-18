import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { CardioDiscipline, WorkoutSession } from '@/types/fitness';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Activity, Footprints, Bike, Waves, Heart, Flame, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CardioTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CardioTrackerModal: React.FC<CardioTrackerModalProps> = ({ isOpen, onClose }) => {
  const { logCustomCardioWorkout } = useApp();
  const [discipline, setDiscipline] = useState<CardioDiscipline>('running');
  const [distanceKm, setDistanceKm] = useState<number>(5.0);
  const [durationMinutes, setDurationMinutes] = useState<number>(28);
  const [avgHeartRate, setAvgHeartRate] = useState<number>(145);
  const [elevationGain, setElevationGain] = useState<number>(45);

  // Compute pace
  const pacePerKmMinutes = distanceKm > 0 ? durationMinutes / distanceKm : 0;
  const paceMinutes = Math.floor(pacePerKmMinutes);
  const paceSeconds = Math.round((pacePerKmMinutes - paceMinutes) * 60);
  const formattedPace = `${paceMinutes}:${paceSeconds < 10 ? '0' : ''}${paceSeconds} /km`;

  // Estimated Calories based on MET
  const estimatedCalories = Math.round(distanceKm * 65 + durationMinutes * 4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    logCustomCardioWorkout({
      name: `${discipline.charAt(0).toUpperCase() + discipline.slice(1)} Session`,
      type: 'cardio',
      durationMinutes,
      estimatedCalories,
      cardioDetails: {
        discipline,
        distanceKm,
        avgPacePerKm: formattedPace,
        avgHeartRate,
        elevationGainMeters: elevationGain,
        hrZones: { zone1: 10, zone2: 60, zone3: 25, zone4: 5, zone5: 0 }
      }
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto p-5 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Activity className="w-5 h-5 text-sky-600" />
            Log Cardiovascular Session
          </DialogTitle>
          <DialogDescription className="text-xs">
            Record outdoor runs, cycling, or indoor swims with Garmin-aligned pace metrics.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {/* Discipline Selector */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { id: 'running', label: 'Run', icon: Footprints },
              { id: 'cycling', label: 'Ride', icon: Bike },
              { id: 'swimming', label: 'Swim', icon: Waves },
              { id: 'rowing', label: 'Row', icon: Activity }
            ].map(d => {
              const Icon = d.icon;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDiscipline(d.id as CardioDiscipline)}
                  className={`p-3 rounded-2xl border flex flex-col items-center gap-1.5 transition-all text-xs font-bold ${
                    discipline === d.id
                      ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                      : 'bg-muted/30 text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{d.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Distance (km)</Label>
              <Input
                type="number"
                step="0.1"
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="rounded-xl h-10 text-xs font-mono font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Duration (mins)</Label>
              <Input
                type="number"
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
                className="rounded-xl h-10 text-xs font-mono font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                Avg Heart Rate
              </Label>
              <Input
                type="number"
                value={avgHeartRate}
                onChange={(e) => setAvgHeartRate(Number(e.target.value))}
                className="rounded-xl h-10 text-xs font-mono font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                Elevation (m)
              </Label>
              <Input
                type="number"
                value={elevationGain}
                onChange={(e) => setElevationGain(Number(e.target.value))}
                className="rounded-xl h-10 text-xs font-mono font-bold"
              />
            </div>
          </div>

          {/* Computed Summary Preview */}
          <div className="p-3.5 rounded-2xl bg-muted/40 border grid grid-cols-2 gap-2 text-center text-xs">
            <div>
              <span className="text-muted-foreground">Calculated Pace</span>
              <p className="font-extrabold text-foreground font-mono mt-0.5">{formattedPace}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Est. Calorie Burn</span>
              <p className="font-extrabold text-amber-600 font-mono mt-0.5">+{estimatedCalories} kcal</p>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-11 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md"
          >
            Log {discipline.toUpperCase()} Activity
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};