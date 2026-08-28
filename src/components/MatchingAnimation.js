import React, { useEffect, useRef, useState, useCallback } from 'react';
import _ from 'lodash';

const MatchingAnimation = () => {
  const canvasRef = useRef(null);
  const [leftNodeCount, setLeftNodeCount] = useState(5);
  const [rightNodeCount, setRightNodeCount] = useState(5);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: 180
  });

  // Responsive resize handler
  const resizeCanvas = useCallback(() => {
    setCanvasSize({
      width: window.innerWidth,
      height: window.innerWidth < 640 ? 120 : 180 // Smaller height on mobile
    });
  }, []);

  useEffect(() => {
    // Add resize event listener
    window.addEventListener('resize', resizeCanvas);
    
    // Initial resize
    resizeCanvas();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [resizeCanvas]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvasSize.width;
    const height = canvasSize.height;
    
    // Set canvas size explicitly
    canvas.width = width;
    canvas.height = height;
    
    // Adjust node positioning based on screen width
    const leftMargin = width < 640 ? 20 : 50;
    const rightMargin = width < 640 ? 20 : 50;
    
    const leftNodes = Array.from({length: leftNodeCount}, (_, i) => ({
      x: leftMargin,
      y: 30 + i * (height - 60) / Math.max(leftNodeCount - 1, 1),
      matched: false,
      matchedTo: null,
      index: i
    }));
    
    const rightNodes = Array.from({length: rightNodeCount}, (_, i) => ({
      x: width - rightMargin,
      y: 30 + i * (height - 60) / Math.max(rightNodeCount - 1, 1),
      matched: false,
      index: i
    }));

    // Create random matching
    const shuffledLeftNodes = _.shuffle(leftNodes);
    const shuffledRightNodes = _.shuffle(rightNodes);
    const minNodes = Math.min(leftNodeCount, rightNodeCount);
    
    // Create matches for the minimum number of nodes
    for (let i = 0; i < minNodes; i++) {
      shuffledLeftNodes[i].matchedTo = shuffledRightNodes[i].index;
    }

    // Sort back by vertical position for animation
    const sortedLeftNodes = _.sortBy(shuffledLeftNodes, 'y');
    
    let currentPair = 0;
    let animationProgress = 0;
    
    function draw() {
      ctx.clearRect(0, 0, width, height);
      
      // Draw completed matches
      for (let i = 0; i < currentPair; i++) {
        const start = sortedLeftNodes[i];
        if (start.matchedTo !== null) {
          const end = rightNodes[start.matchedTo];
          
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.strokeStyle = '#D3D3D3';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      // Draw nodes
      [...sortedLeftNodes, ...rightNodes].forEach(node => {
        ctx.beginPath();
        const nodeRadius = width < 640 ? 3 : 4;
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.matched ? '#4CAF50' : '#2196F3';
        ctx.fill();
      });
      
      // Draw current matching line
      if (currentPair < leftNodeCount) {
        const start = sortedLeftNodes[currentPair];
        if (start.matchedTo !== null) {
          const end = rightNodes[start.matchedTo];
          const progress = Math.min(1, animationProgress);
          
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(
            start.x + (end.x - start.x) * progress,
            start.y + (end.y - start.y) * progress
          );
          ctx.strokeStyle = '#D3D3D3';
          ctx.lineWidth = 1;
          ctx.stroke();
          
          if (progress === 1) {
            sortedLeftNodes[currentPair].matched = true;
            rightNodes[start.matchedTo].matched = true;
            currentPair++;
            animationProgress = 0;
          } else {
            animationProgress += 0.04;
          }
        } else {
          currentPair++;
        }
        
        requestAnimationFrame(draw);
      }
    }
    
    // Handle clicks
    function handleClick(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Check if click is on left side
      if (x < width / 2) {
        setLeftNodeCount(prev => prev + 1);
      } else {
        setRightNodeCount(prev => prev + 1);
      }
    }
    
    canvas.addEventListener('click', handleClick);
    draw();
    
    return () => {
      canvas.removeEventListener('click', handleClick);
    };
  }, [leftNodeCount, rightNodeCount, canvasSize]);

  return (
    <div className="w-full">
      <canvas 
        ref={canvasRef} 
        className="w-full" 
        style={{ 
          height: `${canvasSize.height}px`,
          maxHeight: '180px'
        }} 
      />
    </div>
  );
};

export default MatchingAnimation;